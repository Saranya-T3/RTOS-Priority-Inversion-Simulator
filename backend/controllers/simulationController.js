const { runCppSimulator } = require('../services/simulatorService');
const { parseSimulatorOutput } = require('../services/parserService');
const { validateInput } = require('../services/validationService');

async function runSimulation(req, res, next) {
  try {
    const { processes } = req.body;

    // Validate
    const validationError = validateInput(processes);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    // Build stdin for the C++ program
    // Order: L priority, M priority, H priority
    // Then for each (L, M, H): arrivalTime, burstTime, criticalSection
    const L = processes.find(p => p.id === 'L');
    const M = processes.find(p => p.id === 'M');
    const H = processes.find(p => p.id === 'H');

    const stdin = [
      L.priority,
      M.priority,
      H.priority,
      L.arrivalTime, L.burstTime, L.criticalSection,
      M.arrivalTime, M.burstTime, M.criticalSection,
      H.arrivalTime, H.burstTime, H.criticalSection
    ].join('\n') + '\n';

    const rawOutput = await runCppSimulator(stdin);

    let result;
    try {
      result = parseSimulatorOutput(rawOutput);
    } catch (parseErr) {
      console.error('Parse error:', parseErr);
      return res.status(500).json({
        error: 'Failed to parse simulator output: ' + parseErr.message,
        rawOutput: rawOutput.substring(0, 500)
      });
    }

    return res.json({ success: true, data: result, rawOutput });
  } catch (err) {
    console.error('Simulation error:', err);
    // Pass to Express global error handler
    return next(err);
  }
}

module.exports = { runSimulation };

const ERROR = {
  DB_CONNECTION_FAILED: "Error while connecting database",
  DB_NOT_CONNECTED: "Database not connected",
  INTERNAL_SERVER_ERROR: "Internal server error",
};

const priorityMap = {
  Low: -1,
  High: 1,
};

const dueDateMap = {
  farthest: -1,
  closest: 1,
};

module.exports = { ERROR, priorityMap, dueDateMap };

import { exec } from 'child_process';

// Searches exported chat log files on disk for a keyword, used by
// the compliance export tool for large workspaces where an in-memory
// search would be too slow.

export function grepExportedLogs(exportDir, keyword) {
  return new Promise((resolve, reject) => {
    exec(`grep -r "${keyword}" ${exportDir}`, (err, stdout) => {
      if (err && err.code !== 1) return reject(err);
      resolve(stdout);
    });
  });
}
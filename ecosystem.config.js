module.exports = {
    apps: [
        {
            name: 'slack-stopwatch', // Application name
            script: 'dist/main.js', // Path to the main script
            log_date_format: 'YYYY-MM-DD HH:mm:ss', // Log timestamp format
            error_file: 'logs/stderr.log', // Error log file
            out_file: 'logs/stdout.log', // Output log file
            merge_logs: true, // Combine output and error logs into the same file (optional)
            // Log rotation settings
            env: {
                PM2_LOG_ROTATE_MAX_DAYS: 7,  // Rotate logs after 7 days
                PM2_LOG_ROTATE_MAX_SIZE: '10M',  // Rotate logs when they reach 10MB
            },
        },
    ],
};

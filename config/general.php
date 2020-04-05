<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

return [
    'aliases' => [
            '@web' => getenv('SITE_URL'),
            '@bwebroot' => getenv('WEB_ROOT_PATH'),
        ],
    'allowUpdates' => (bool)getenv('ALLOW_UPDATES'),
    'allowAdminChanges' => (bool)getenv('ALLOW_ADMIN_CHANGES'),
    'backupOnUpdate' => (bool)getenv('BACKUP_ON_UPDATE'),
    'enableTemplateCaching' => (bool)getenv('ENABLE_TEMPLATE_CACHING'),
    'isSystemLive' => (bool)getenv('IS_SYSTEM_LIVE'),
    'resourceBasePath' => getenv('WEB_ROOT_PATH').'/cpresources',    
    'siteUrl' => getenv('SITE_URL'),
    

    // Modes and triggers keys
    'devMode' => (bool)getenv('DEV_MODE'),
    'cpTrigger' => getenv('TRIGGER'),
    'securityKey' => getenv('SECURITY_KEY'),

    // Default Week Start Day (0 = Sunday, 1 = Monday...)
    'defaultWeekStartDay' => 1,

    // Whether to save the project config out to config/project.yaml
    // (see https://docs.craftcms.com/v3/project-config.html)
    'useProjectConfigFile' => false,

    // urls
    'omitScriptNameInUrls' => true,
];

<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

return array(
    // ...
    '*' => array(
        'useEmailAsUsername' => true,
        'enableCsrfProtection' => true,
        'useEmailAsUsername' => true,
        'setPasswordPath' => array(
            'en_gb' => 'login/set-password',
            'cy_gb' => 'login/set-password'
        ),
        'setPasswordSuccessPath' => array(
            'en_gb' => 'login?status=passwordreset',
            'cy_gb' => 'login?status=passwordreset'
        ),
        'useBugherd' => false,
        'verificationCodeDuration' => 'P4W',
        'omitScriptNameInUrls' => true,

    ),
    
    'moodhwb.dev' => array(
//      'devMode' => true,
        'useCompressedJs' => false,
        'siteUrl' => array(
            'en_gb' => 'http://moodhwb.dev/en/',
            'cy_gb' => 'http://moodhwb.dev/cy/',
        ),
        'useBugherd' => true,
//        'cacheMethod' => 'redis',
    ),
    'dev' => array(
     	'devMode' => true,
	    'useCompressedJs' => false,
        'siteUrl' => array(
	        'en_gb' => 'http://localhost/en/',
	        'cy_gb' => 'http://localhost/cy/',
    	),
        'useBugherd' => true,
        'cache' => false,
//        'cacheMethod' => 'redis',
    ),
    '192.168.0.24' => array(
//      'devMode' => true,
        'useCompressedJs' => false,
        'siteUrl' => array(
            'en_gb' => 'https://192.168.0.24/en/',
            'cy_gb' => 'https://192.168.0.24/cy/',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true,
//        'cacheMethod' => 'redis',
    ),
    'stage' => array(
//      'devMode' => true,
        'useCompressedJs' => false,
        'siteUrl' => array(
            'en_gb' => 'https://moodhwb.madebymoon.com/en/',
            'cy_gb' => 'https://moodhwb.madebymoon.com/cy/',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true,
//        'cacheMethod' => 'redis',
    ),
    'stage.madebymoon.com' =>array(
//      'devMode' => true,
        'useCompressedJs' => false,
        'siteUrl' => array(
            'en_gb' => 'https://stage.madebymoon.com/en/',
            'cy_gb' => 'https://stage.madebymoon.com/cy/',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true,
//        'cacheMethod' => 'redis',
    ),

    'stage.moodhwb.org' => array(
        'devMode' => true,
        'siteUrl' => array(
            'en_gb' => 'https://stage.moodhwb.org',
            'cy_gb' => 'https://stage.hwbhwyliau.org',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true,
	'cacheDuration' => 'P1W',
	'cacheMethod' => 'redis'
    ),


    'stage.hwbhwyliau.org' => array(
        'devMode' => true,
        'siteUrl' => array(
            'en_gb' => 'https://stage.moodhwb.org',
            'cy_gb' => 'https://stage.hwbhwyliau.org',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true
    ),

    'production' => array(
        'siteUrl' => array(
            'en_gb' => 'https://www.moodhwb.org',
            'cy_gb' => 'https://www.hwbhwyliau.org',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true,
    'cacheDuration' => 'P1W',
    'cacheMethod' => 'redis'
    ),

/*
    'www.hwbhwyliau.org' => array(
        'siteUrl' => array(
            'en_gb' => 'https://www.moodhwb.org',
            'cy_gb' => 'https://www.hwbhwyliau.org',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => true
    )
    */
);

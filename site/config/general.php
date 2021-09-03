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
        'verificationCodeDuration' => 'P8W',
        'omitScriptNameInUrls' => true,
        'securityKey' => getenv('SECURITY_KEY')
    ),
    
    'moodhwb.dev' => array(
//      'devMode' => true,
        'useCompressedJs' => false,
        'siteUrl' => array(
            'en_gb' => 'http://moodhwb.dev/en/',
            'cy_gb' => 'http://moodhwb.dev/cy/',
        ),
        'useBugherd' => false,
//        'cacheMethod' => 'redis',
        'securityKey' => getenv('SECURITY_KEY')

    ),
    'moodhwb.lemoncog.com' => array(
        'devMode' => true,
    'useCompressedJs' => false,
    'siteUrl' => array(
        'en_gb' => 'http://moodhwb.lemoncog.com/en/',
        'cy_gb' => 'http://moodhwb.lemoncog.com/cy/',
    ),
    'useBugherd' => false,
    'cache' => false,
    //        'cacheMethod' => 'redis',
    'securityKey' => getenv('SECURITY_KEY')

    ),
    'dev' => array(
     	'devMode' => true,
	    'useCompressedJs' => false,
        'siteUrl' => array(
	        'en_gb' => 'http://192.168.4.47/en/',
	        'cy_gb' => 'http://192.168.4.47/cy/',
    	),
        'useBugherd' => false,
        'cache' => false,
//        'cacheMethod' => 'redis',
        'securityKey' => getenv('SECURITY_KEY')

    ),
    'stage.moodhwb.org' => array(
        'devMode' => true,
        'siteUrl' => array(
            'en_gb' => 'https://stage.moodhwb.org',
            'cy_gb' => 'https://stage.hwbhwyliau.org',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => false,
        'cacheDuration' => 'P1W',
        'cacheMethod' => 'redis',
        'securityKey' => getenv('SECURITY_KEY')

    ),

    'production' => array(
        'siteUrl' => array(
            'en_gb' => 'https://www.moodhwb.org',
            'cy_gb' => 'https://www.hwbhwyliau.org',
        ),
        'useCompressedJs' => true,
        'omitScriptNameInUrls' => true,
        'useBugherd' => false,
    'cacheDuration' => 'P1W',
    'cacheMethod' => 'redis',
    'securityKey' => getenv('SECURITY_KEY')

    )
);

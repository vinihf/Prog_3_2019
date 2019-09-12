<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2a2a049cd11d1bcfe5f6ede0dc0688d1
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Classes\\BD\\' => 11,
            'Classes\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Classes\\BD\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Classes\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2a2a049cd11d1bcfe5f6ede0dc0688d1::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2a2a049cd11d1bcfe5f6ede0dc0688d1::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/ProgressCircle.js', 'src/theme.js'],
            options: {
                "forin": true,
                "latedef": true,
                "unused": true,
                "trailing": true
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/ProgressCircle.js', 'src/theme.js'],
                dest: 'doony.js',
            },
        },

        uglify: {
            options: {
                mangle: {
                    except: ['ProgressCircle']
                },
                report: 'gzip',
                banner: '/* Doony v0.1 | (c) 2013 Kevin Burke | License: MIT */\n',
                compress: true
            },
            my_target: {
                files: {
                    'doony.min.js': ['doony.js']
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'doony.css': 'src/doony.scss',
                },
                options: {
                    style: 'compressed'
                }
            },
        },

        watch: {
            scripts: {
                files: ['src/theme.js', 'src/ProgressCircle.js'],
                tasks: ['jshint', 'concat', 'uglify']
            },
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
};


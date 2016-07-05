module.exports = function(grunt) {
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('sassMain', ['clean:css', 'sass:main', 'cssmin:main']);
	grunt.registerTask('sassAdmin', ['clean:css', 'sass:admin', 'cssmin:main']);

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		cssBuildDir: 'library/css/build',
		cssDistDir: 'library/css/dist',

		sassDir: 'library/scss',

		jsSrcDir: 'library/js/src',
		jsBuildDir: 'library/js/build',
		jsDistDir: 'library/js/dist',

		clean: {
			all: [
				'<%= cssBuildDir %>',
				'<%= cssDistDir %>',
				'<%= jsBuildDir %>',
				'<%= jsDistDir %>'
			],
			css: [
				'<%= cssBuildDir %>',
				'<%= cssDistDir %>'
			],
			js: [
				'<%= jsBuildDir %>',
				'<%= jsDistDir %>'
			]
		},

		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				globals: {
					jQuery: true
				}
			}
		},

		sass: {
			all: {
				options: {
					sourcemap: 'none',
					style: 'expanded'
				},
				files: {
					'<%= cssBuildDir %>/style.css' : '<%= sassDir %>/style.scss',
					'<%= cssBuildDir %>/editor-style.css' : '<%= sassDir %>/editor-style.scss',
					'<%= cssBuildDir %>/ie.css' : '<%= sassDir %>/ie.scss',
					'<%= cssBuildDir %>/login.css' : '<%= sassDir %>/login.scss'
				}
			},

			main: {
				options: {
					sourcemap: 'none',
					style: 'expanded'
				},
				files: {
					'<%= cssBuildDir %>/style.css' : '<%= sassDir %>/style.scss'
				}
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			all: {
				files: {
					'<%= cssDistDir %>/style.min.css' : '<%= cssBuildDir %>/style.css',
					'<%= cssDistDir %>/admin.min.css' : '<%= cssBuildDir %>/admin.css',
					'<%= cssDistDir %>/editor-style.min.css' : '<%= cssBuildDir %>/editor-style.css',
					'<%= cssDistDir %>/ie.min.css' : '<%= cssBuildDir %>/ie.css',
					'<%= cssDistDir %>/login.min.css' : '<%= cssBuildDir %>/login.css'
				}
			},
			main: {
				files: {
					'<%= cssDistDir %>/style.min.css' : '<%= cssBuildDir %>/style.css'
				}
			},
			admin: {
				files: {
					'<%= cssDistDir %>/admin.min.css' : '<%= cssBuildDir %>/admin.css'
				}
			},
			editor: {
				files: {
					'<%= cssDistDir %>/editor-style.min.css' : '<%= cssBuildDir %>/editor-style.css'
				}
			},
			ie: {
				files: {
					'<%= cssDistDir %>/ie.min.css' : '<%= cssBuildDir %>/ie.css'
				}
			},
			login: {
				files: {
					'<%= cssDistDir %>/login.min.css' : '<%= cssBuildDir %>/login.css'
				}
			}
		},

		watch: {
			options: {
				spawn: false
			},
			breakpoints: {

				files: [
					'<%= sassDir %>/style.scss',
					'<%= sassDir %>/breakpoints/*.scss',
					'<%= sassDir %>/modules/*.scss',
					'<%= sassDir %>/partials/*.scss',
				],
				tasks: ['sassMain']
			},
			admin: {
				files: [
					'<%= sassDir %>/admin.scss'
				],
				tasks: ['sassAdmin']
			}
		}
	});
};
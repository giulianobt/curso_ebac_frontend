# curso_ebac_frontend
Cusro EBAC frontend
- Exercício Grunt

# aula 18.1
npm i -g grunt-cli
npm i --save-dev grunt

// package.json
scripts: grunt: grunt

# aula 18.2

// Grunfile.js
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css': 'main.scss'
                }
            }
        },
        concurrent: {
            target: ['olaGrunt', 'less', 'sass']
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        }, 
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENERECO_DO_CSS',
                            replacement: './styles/main.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options:  {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        clean: ['prebuild']
    })

    grunt.registerTask('olaGrunt', function() {
        const done = this.async()
        setTimeout(function() {
            console.log('Olá Grunt')
            done()
        })
        console.log('olá grunt')
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-concurrent')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-replace')
    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.loadNpmTasks('grunt-contrib-clean')

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean'])
}

> npm run grunt olaGrunt

# aula 18.3

npm install --save-dev grunt-contrib-less
npm install --save-dev grunt-contrib-sass

# aula 18.4

npm install --save-dev grunt-concurrent

# aula 18.5

# aula 18.6

npm install --save-dev grunt-contrib-watch

# aula 18.7

npm install --save-dev grunt-replace
npm install --save-dev grunt-contib-htmlmin
npm install --save-dev grunt-contrib-clean


## Neste exercício você deverá:

1) Criar um arquivo Gruntfile;
2) Executar a compilação do LESS;
3) Executar a compressão de código JavaScript;
4) Criar um branch chamada "exercicio_grunt";
5) Armazenar o arquivo Gruntfile nesta branch;
6) Enviar o link do repositório através da plataforma.
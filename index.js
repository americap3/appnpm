const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = "debug";

logger.debug("Iniciando aplicación en modo de pruebas.");
logger.info("La app ha iniciado correctamente");
logger.warn("Falta el archivo config de la app");
logger.error("No se pudo acceder al sistema de archivos del equipo");
logger.fatal("Aplicación no se pudo ejecutar en el so")

let Hola_lint=0
function sumar (x, y){
    return x+y;
}

module.exports = sumar;
// ==========================
// Puerto
// ==========================
process.env.PORT = process.env.PORT || 3000;

// ==========================
// Entorno
// ==========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==========================
// Vencimiento del token
// ==========================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = '48h';

// ==========================
//  SEED de autenticación
// ==========================
process.env.SEED = process.env.SEED = 'este-es-el-seed-desarrollo';


// ==========================
// Base de datos
// ==========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
    //'mongodb://cafe-user:abc123456@ds133054.mlab.com:33054/cafe';
}
process.env.URLDB = urlDB;

// ==========================
// GOOGLE CLIENT ID
// ==========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '224649201674-kleekath5562cd1svrjrboo752f4101e.apps.googleusercontent.com';
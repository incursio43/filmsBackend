import app from './app';
import connection from '../db/mysql';

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`Aplicación corriendo en el puerto ${app.get('port')}`)
})
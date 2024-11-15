const typeorm = require("typeorm")

const dataSource = new typeorm.DataSource({
    type:"mysql",
    host: 'localhost', 
    user: 'root',
    password: '1234',
    port:3306,
    database: 'photodb',
    synchronize: true
});

 dataSource.initialize();
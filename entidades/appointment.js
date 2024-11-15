const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "Appointment",
    tableName: "appointments", // Nombre de la tabla en la base de datos
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        date: {
            type: "date",
        },
        hours: {
            type: "time",
        },
        place: {
            type: "varchar",
            length: 255,
        },
        description: {
            type: "text",
        }
    }
});

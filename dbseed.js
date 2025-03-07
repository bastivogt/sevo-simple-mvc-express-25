const db = require("./db");
const PersonModel = require("./src/personApp/models/PersonModel");

const peopleData = [
    {
        firstname: "Sebastian",
        lastname: "Vogt",
        birthday: "1981-02-27",
        published: true,
    },
    {
        firstname: "Ute",
        lastname: "Meusel",
        birthday: "1980-07-27",
        published: true,
    },
    {
        firstname: "Günther",
        lastname: "Vogt",
        birthday: "2016-08-27",
        published: true,
    },
    {
        firstname: "Joel",
        lastname: "Vogt",
        birthday: "2006-12-15",
        published: true,
    },
    {
        firstname: "Noah",
        lastname: "Vogt",
        birthday: "2008-12-05",
        published: true,
    },
];

(async () => {
    await db.sync({ force: true });

    peopleData.forEach(async (person) => {
        const u = await PersonModel.create({
            firstname: person.firstname,
            lastname: person.lastname,
            birthday: person.birthday,
        });
    });
})();

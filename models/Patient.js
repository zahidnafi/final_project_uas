//STEP 5: SETUP MODEL
// import db
const db = require("../config/database");

// class models patient
class Patient {
    // method all
    static all() {
        // show all data patients
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients";
            db.query(sql, (err, results) => {
                resolve(results);
            });
        });
    }

    // method create
    static async create(data) {
        // promise 1
        const id = await new Promise((resolve, reject) => {
            const sql = "INSERT INTO patients SET ?";
            db.query(sql, data, function(err, results) {
                resolve(results.insertId);
            });
        });
        // refactor promise 2
        const patient = this.find(id);
        return patient;
    }

    // method find
    static find(id) {
        // find data by id
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE id = ?";
            db.query(sql, id, (err, results) => {
                // destruct to array
                const [patient] = results;
                resolve(patient);
            });
        });
    }

    // method update
    static async update(id, data) {
        // updating data
        await new Promise((resolve, reject) => {
            const sql = "UPDATE patients SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, results) => {
                resolve(results);
            });
        });
        // find the updated data
        const patient = await this.find(id);
        return patient;
    }

    // method delete
    static delete(id) {
        // deleting data
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM patients WHERE id = ?";
            db.query(sql, id, (err, results) => {
                resolve(results);
            });
        });
    }

    // method search
    static search(name) {
        // search data by name
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM patients WHERE name LIKE '%" + name + "%'";
            db.query(sql, name, (err, results) => {
                resolve(results);
            });
        });
    }

    // method findbystatus
    static async findByStatus(status) {
        // find data by positive status
        if (status == 'positive') {
            return new Promise((resolve, reject) => {
                const sql = "SELECT * FROM patients WHERE status = 'Positive'";
                db.query(sql, status, (err, results) => {
                    resolve(results);
                });
            });
        }
        // find data by recovered status
        else if (status == 'recovered') {
            return new Promise((resolve, reject) => {
                const sql = "SELECT * FROM patients WHERE status = 'Recovered'";
                db.query(sql, status, (err, results) => {
                    resolve(results);
                });
            });
        }
        // find data by dead status
        else if (status == 'dead') {
            return new Promise((resolve, reject) => {
                const sql = "SELECT * FROM patients WHERE status = 'dead'";
                db.query(sql, status, (err, results) => {
                    resolve(results);
                });
            });
        }
    }
}

// export class models Patient
module.exports = Patient;

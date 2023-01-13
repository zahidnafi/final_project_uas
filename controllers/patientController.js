// TODO 4: SETUP CONTROLLER

// import model patient
const Patient = require("../models/Patient");

// class patient controller
class patientController {
    async index(req, res) {
        const patients = await Patient.all();

        if (patients.length > 0) {
            const data = {
                message: "Get All Resources",
                data: patients,
            };

            return res.status(200).json(data);
        }

    //else
        const data = {
            message: "Resources is empty",
        };

        return res.status(200).json(data);
    }

    async store(req, res) {
        //destructing object req.body
        const { name, phone, address, status, in_date_at, out_date_at } = req.body;

        //if there's no definition
        if (!name || !phone || !address || !status || !in_date_at || !out_date_at) {
            const data = {
                message: "Data is required",
            };

            return res.status(422).json(data);
        }

        else if (isNaN(parseInt(phone)) || phone.length < 10) {
            const data = {
                message: "Phone number must be numeric, max 10",
            };

            return res.status(422).json(data);
        }

        else if (isNaN(Date.parse(in_date_at))) {
            const data = {
                message: "The date must be valid"
            };

            return res.status(422).json(data);
        }
        
        //else    
        const patient = await Patient.create(req.body);
            
        const data = {
            message: "Resources is added successfully",
            data: patient,
        };

        return res.status(201).json(data);
    }



    async update(req, res) {
        const { id } = req.params;

        const patient = await Patient.find(id);

        if (patient) {
            const patientUpdated = await Patient.update(id, req.body);
            
            const data =  {
                message: "Resources is updated successfully",
                data: patientUpdated,
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: "Resources not found",
            };

            res.status(404).json(data);
        }
    }
    async destroy(req, res) {
        const { id } = req.params;

        const patient = await Patient.find(id);

        if (patient) {
            await Patient.delete(id);
            const data = {
                message: "Resources is deleted successfully",
            };

            res.status(200).json(data);
        
        } else {
            const data = {
                message: "Resources not found",
            };
        res.status(404).json(data);    
        }
    }

    async show (req, res) {
        const { id } = req.params;

        const patient = await Patient.find(id);
        if (patient) {
            const data = {
                message: "Get detail resources",
                data: patient,
            };

            res.status(200).json(data);
        
        } else {
            const data = {
                message: "Resources not found",
            };

            res.status(404).json(data);
        
        }
    }

    async search(req, res) {
        const { name } = req.params;

        const patient = await Patient.search(name);
        if (patient) {
            const data = {
                message: "Get resources by name",
                data: patient
            };

            res.status(200).json(data);

        } else {
            const data = {
                message: "Resources not found",
            };

            res.status(404).json(data);
        }
    }

    async positive(req, res) {
        const patient = await Patient.findByStatus('positive');
        const total = patient.length;
        if (patient) {
            const data = {
                message: "Get positive resources",
                total: total,
                data: patient,
            };

            res.status(404).json(data);
        }
    }

    async recovered(req, res) {
        const patient = await Patient.findByStatus('recovered');
        const total = patient.length;
        if (patient) {
            const data = {
                message: "Get recovered resources",
                total: total,
                data: patient,
            };

            res.status(200).json(data);
        
        } else {
            const data = {
                message: "Resources not found",
            };

            res.status(404).json(data);
        }
    }

    async dead(req, res) {
        const patient = await Patient.findByStatus('dead');
        const total = patient.length;
        if (patient) {
            const data = {
                message: "Get dead resources",
                total: total,
                data: patient,
            };

            res.status(200).json(data);
        
        } else {
            const data = {
                message: "Resources not found",
            };

            res.status(404).json(data);
        }
    }
    
}

const object = new patientController();
module.exports = object;
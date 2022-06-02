exports.add = (model, data) => {
    return new Promise((resolve, reject) => {
        model.create(data, (err, res) => {
            if (err) {
                console.log(err);
                reject(err)
            }
            else {
                resolve(res)
            }
        })
    })
};

exports.findOne = (model, email) => {
    return new Promise((resolve, reject) => {
        model.findOne({email}, (err, res) => {
            if (err) {
                reject(err)
                console.log(err);
            }
            resolve(res)
        })
    })
}


exports.find = (model) => {
    return new Promise((resolve, reject) => {
        model.find( (err, res) => {
            if (err) {
                reject(err)
                console.log(err);
            }
            resolve(res)
        })
    })
}
/**
 * Function to get vehicle object by VIN
 * - should return a promise
 * - should reject if no VIN passed
 *   error message: "No VIN provided"
 * - should reject if no matches found
 *   error message: "No items matching ${vin}"
 * @param {*} data - see shape in ../../data.example.json
 * @returns vehicle object
 */
const getByVIN = (data, vin) => {
    return new Promise((resolve, reject) => {
        if (!vin) {
            reject(`No VIN provided`);
        }

        const vehicles = data.map((data) => data.vehicle);
        const mergedVehicles = [].concat.apply([], vehicles);
        const result = mergedVehicles.find((vehicle) =>{
            return vehicle.vin === vin;
        });
        
        if (!result) {
            reject(`No items matching ${vin}`);
        }
        resolve(result);
    });
};

module.exports = getByVIN;

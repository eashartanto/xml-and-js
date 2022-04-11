/**
 * Function to get username and total age of user's vehicles
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of objects:
 * [{
 *  userName - string,
 *  totalAgent - number
 * }]
 */
const getUserNameAndVehicleAge = (data) => {
    return new Promise((resolve) =>{
        const result = data.map((user) => {
            const userName = user.userName;
            const totalAge = user.vehicle.reduce((acc, vehicle)=> {
                return acc + vehicle.age;
            },0);
            return { userName, totalAge };
        });
        resolve(result);
    });
};

module.exports = getUserNameAndVehicleAge;

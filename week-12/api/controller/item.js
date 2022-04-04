const products = require("../data/data");

const getAll = ({ id, first_name, last_name, email, gender, car_make, car_model, car_model_year, car_color, credit_card_number }) =>
  new Promise((resolve) => {
    let result = Array.from(products);

    if (id) {
      result = result.filter((item) => item.id === id);
    }

    if (first_name) {
      result = result.filter((item) => item.first_name === first_name);
    }

    if (last_name) {
        result = result.filter((item) => item.last_name === last_name);
      }
    if (email) {
      result = result.filter((item) => item.email === email);
    }

    if (gender) {
        result = result.filter((item) => item.gender === gender);
      }

    if (car_make) {
        result = result.filter((item) => item.car_make === car_make);
      }

    if (car_model) {
        result = result.filter((item) => item.car_model === car_model);
      }

    if (car_model_year) {
    result = result.filter((item) => item.car_model_year === Number(car_model_year));
    }

    if (car_color) {
    result = result.filter((item) => item.car_color === car_color);
    }

    if (credit_card_number) {
      result = result.filter((item) => item.credit_card_number === Number(credit_card_number));
    }

    resolve({ code: 200, data: JSON.stringify(result) });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const product = products.find((product) => product.id === id);

    if (product) {
      resolve({ code: 200, data: JSON.stringify(product) });
    } else {
      resolve({
        code: 404,
        data: { message: `No product found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};

const data = {
  displayedName: {
    displayedName: {
      value: ["Профиль маячковый ПВХ 10 мм L3м"],
      description: "Полное наименование товара для клиента",
    },
  },
  stock: {
    stocks: {
      34: {
        2: "35",
        3: "42",
        4: "58",
        5: "57",
        6: "112",
        20: "51",
        22: "78",
        26: "34",
        32: "22",
        35: "358",
        40: "28",
        43: "68",
        45: "58",
        49: "31",
        51: "29",
        56: "42",
        62: "26",
        64: "0",
        65: "57",
        86: "15",
        114: "41",
        117: "46",
        143: "46",
        162: "4",
        171: "0",
        176: "12",
      },
    },
  },
};

const dataHandlers = {
  getProductName(data) {
    const productName = data.displayedName.displayedName.value.join("");
    return productName;
  },
  
  getAvaibleShopsNumbers(data) {
    const shopsNumbers = Object.keys(data.stock.stocks);
    return shopsNumbers;
  },

  getTheBiggestStocks(data) {
    let maxNumber = 0;
    let shopNumber = ''
    const region = data.stock.stocks;

    for (shop in region) {
      const currentRegion = region[shop];

      for (shop in currentRegion) {
        const numberOfProducts = Number(currentRegion[shop]);

        if (numberOfProducts > maxNumber) {
          maxNumber = numberOfProducts;
          shopNumber = shop
        }
      }
    }

    return  {
      'Максимальное кол-во товара': maxNumber,
      'Номер магазщина': shopNumber
    }
  },
};


console.log('PRODUCT NAME: ', dataHandlers.getProductName(data))
console.log('SHOPS ARRAY: ', dataHandlers.getAvaibleShopsNumbers(data))
console.log("RESULT: ", dataHandlers.getTheBiggestStocks(data));

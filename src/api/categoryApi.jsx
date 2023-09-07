

const FAKE_CATEGORY_LIST = [
    "Business", "Financial", "Technology", "Social"
]

const categoryApi = {
    getData: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(FAKE_CATEGORY_LIST)
        }, 2000);
      })
    }

}

export default categoryApi
const funcs = {
    reverseMap: (array, cb) =>{
        let res = []
        for (let i = array.length-1; -1 < i; i--){
            res.push(cb(array[i], i))
        }
        return res
    }

}

export default funcs
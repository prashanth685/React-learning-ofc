async function getdata(){
    try {
        const res=await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(res.data)   
    } catch (error) {
        console.log(error)
    }
}
getdata()
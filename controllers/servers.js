let servers = [
    {id: 1, name: 'AWS', status: 'working'},
    {id: 2, name: 'Google Cloud', status: 'working'}
]

export const getAll = (req, res)=>{
    res.status(200).json(servers)
}
export const create = (req, res)=>{
    const newServer = {
       id: Date.now().toString(),
    ...req.body}
    servers.push(newServer) 
      
    res.status(201).json(newServer)
}


export const remove = (req, res)=>{

    servers = servers.filter(s=>s.id !== parseInt(req.params.id))
    console.log(servers)
    res.status(201).json({message: 'OK'})

}
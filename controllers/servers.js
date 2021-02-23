const servers = [
    {id: 1, name: 'AWS', status: 'working'},
    {id: 2, name: 'Google Cloud', status: 'working'}
]

export const getAll = (req, res)=>{
    res.status(200).json(servers)
}
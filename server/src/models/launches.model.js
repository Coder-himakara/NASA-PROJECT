const launches = new Map();

const launch={
    flightNumber: 100,
    mission:'',
    rocket:'',
    launchDate:'',
    destination:'',
    customer:['ZTM','NASA'],
    upcoming:true,
    success:true,
};

launches.set(launch.flightNumber,launch);

module.exports = {
    launches,
}
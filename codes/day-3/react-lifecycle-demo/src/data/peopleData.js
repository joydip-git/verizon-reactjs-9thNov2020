let peopleData = [
    {
        id: 1,
        name: 'anil',
        age: 20
    },
    {
        id: 2,
        name: 'sunil',
        age: 30
    },
    {
        id: 3,
        name: 'mahesh',
        age: 30
    }
]

export const getPeople = () => {
    return peopleData;
}
export const getPerson = (id) => {
    return peopleData.find(p => p.id === id);
}
export const updatePeople = (people) => {
    peopleData = people;
    return peopleData;
}
module.exports = async function isCedulaRegistered(container, cedula) {
    const query = `SELECT VALUE COUNT(1) FROM c WHERE c.cedula = @cedula`;
    const { resources: count } = await container.items.query({ query, parameters: [{ name: "@cedula", value: cedula }] }).fetchAll();
    return count[0] > 0;
}
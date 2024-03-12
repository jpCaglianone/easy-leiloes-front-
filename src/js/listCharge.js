async function listCharge() {
    try {
        const response = await fetch('https://a5436e77-1d77-4583-8d79-1a0ec14f8b4a-00-13osuyguj3pdp.janeway.replit.dev/objetos');
        if (!response.ok) {
            throw new Error('Erro ao buscar os objetos');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default listCharge;
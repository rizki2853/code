const urlSplit = () => {
    const url = window.location.hash
        .slice(2)
        .split('-');
    return {
        resource: url[0] || null, id: url[1] || null,
    }
}

export default urlSplit;
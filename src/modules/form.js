const form = ()=>{
    return `
    <div class="form-group mb-2">
        <input type="text" placeholder="Adresas" class="form-control term">
    </div>
     <div class="form-group mb-2">
        <input type="text" class="form-control result" readonly>
    </div>
    <button type="submit">Ieskoti kodo</button>
    `
}

export default form
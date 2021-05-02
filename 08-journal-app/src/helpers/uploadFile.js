
export const uploadFile = async(file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dfkwtnofq/upload';
    const formData = new FormData(); // metodo de JS
    formData.append('upload_preset','react-journal')
    formData.append('file',file)


    try {
        const resp = await fetch(cloudUrl,{
            method:'POST',
            body: formData
        })

        if(resp.ok){
            const clodResp = await resp.json();
            return clodResp.secure_url
        } else {
            throw await resp.json()
        }
    } catch (error) {
        throw error
    }
}

import * as exhibitAPI from './exhibit-api';

export async function getExhibit(){
    try {
        const data = await exhibitAPI.index()
        return data
    } catch (err) {
        return err
    }
}

export async function createItem(newItemData){
    try {
        const data = await exhibitAPI.create(newItemData);
        return data
    } catch (err) {
        return err
    }
}

export async function getItem(id){
    try {
        const data = await exhibitAPI.detail(id)
        console.log(data)
        return data
    } catch (err) {
        return err
    }
}

export async function updateItem(id, data){
    try {
        const resp = await exhibitAPI.update(id, data)
        return resp
    } catch (err) {
        return err
    }
}

export async function deleteItem(id){
    try {
        const data = await exhibitAPI.destroy(id)
        return data
    } catch (err) {
        return err
    }
}
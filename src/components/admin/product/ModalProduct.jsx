import React from 'react'

export const ModalProduct = ({
  titleModal, cancelDelete, handleSubmit, editedProduct, handleChange, handleSave,
  categories, editingId, handleCreate, isEditing, handleChangeCheck, handleFileChange
}) => {
  return (
    <div>
      <div className='modal-dialog modal-lg'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h3 className='modal-title'>{titleModal}</h3>
            <button type='button' className='btn-close' data-bs-dismiss="modal"
              aria-label='close' onClick={cancelDelete}>
            </button>
          </div>

          <div className='modal-body'>
            <form onSubmit={handleSubmit}>
              <div className="row row-cols-3 p-2">
                <div className="col-6 col-sm-6">
                  <label className="form-label required">Nombre del producto </label>
                  <input type="text" className='form-control' name="product_name"
                    value={editedProduct.product_name || ''} onChange={handleChange} required />
                  {/* {errors.product_name && <p>This field is required</p>} */}
                </div>

                <div className="col-6 col-sm-6">
                  <label className="form-label required">Categoría </label>
                  <div>
                    <select name="id_category" id="category" className='form-control' onChange={handleChange}>
                      {
                        categories.map((data, index) => (
                          data.id_category === editedProduct.id_category ?
                            <option value={data.id_category} key={data.id_category} selected>
                              {data.category_name}
                            </option>
                            :
                            <option value={data.id_category} key={data.id_category} >
                              {data.category_name}
                            </option>
                        ))
                      }
                    </select>
                  </div>
                </div>

                <div className="col-6 col-sm-6">
                  <label className="form-label">Materiales </label>
                  <textarea rows="2" className="form-control" name="material"
                    value={editedProduct.material || ''} onChange={handleChange}>
                  </textarea>
                </div>

                <div className="col-6 col-sm-6">
                  <label className="col-form-label">Descripción </label>
                  <textarea rows="2" className="form-control" name="description"
                    value={editedProduct.description || ''} onChange={handleChange} required>
                  </textarea>
                </div>

                <div className="col-6 col-sm-6">
                  <label className="form-label required">Precio $</label>
                  <input type="number" className='form-control' name="price"
                    value={editedProduct.price || 0} onChange={handleChange} required />
                </div>

                <div className="col-6 col-sm-6">
                  <label className="form-label required">Destacado </label>
                  <div className="form-check">
                    <input className="checkbox-inline" type="checkbox" name='privilege'
                      checked={editedProduct.privilege && true ? true : false} onChange={handleChangeCheck} />
                  </div>
                </div>

                <div className="col-6 col-sm-6">
                  <div className="mb-3 mt-5">
                    {/* <label for="formFile" className="form-label">Default file input example</label> */}
                    <input className="form-control" type="file" id="url_image" name='url_image'
                      required={editingId ? false : true} onChange={handleFileChange}/>
                  </div>
                </div>
                {
                  editedProduct.url_image !== 'http://localhost:3001' && editedProduct.url_image !== null ?
                    <div className="col-6 col-sm-6">
                      <div className="mb-3 mt-3">
                        <img src={editedProduct.url_image} alt="Imagen" width="150" height="150" />
                      </div>
                    </div>
                    :
                    <div></div>
                }
              </div>

              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary'
                  data-bs-dismiss="modal" onClick={cancelDelete}>
                  Cancelar
                </button>
                <button type="submit" className='btn btn-success'
                  data-bs-dismiss="modal" onClick={isEditing ? handleSave : handleCreate}>
                  {isEditing ? 'Editar' : 'Agregar'}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

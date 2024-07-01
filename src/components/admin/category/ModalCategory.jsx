import React from 'react'

export const ModalCategory = ({
  titleModal, handleChange, editedCategory, handleSave, isEditing, cancelDelete, handleCreate
}) => {

  return (
    <div>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h3 className='modal-title'>{titleModal}</h3>
            <button type='button' className='btn-close' data-bs-dismiss="modal"
              aria-label='close' onClick={cancelDelete}>
            </button>
          </div>

          <div className='modal-body'>
            <label className="form-label required">Nombre de la categoría </label>
            <input type="text" className='form-control' onChange={handleChange} name="category_name"
              value={editedCategory.category_name || ''} required />
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-secondary' aria-label='close'
              data-bs-dismiss="modal" onClick={cancelDelete} >
              Cancelar
            </button>
            <button type='button' className='btn btn-success' onClick={isEditing ? handleSave : handleCreate}
              data-bs-dismiss="modal" >
              {isEditing ? 'Editar' : 'Agregar'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

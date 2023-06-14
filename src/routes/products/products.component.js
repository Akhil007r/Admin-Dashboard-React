import React from "react";
import Product from "../../components/images/box.png";
import Edit from "../../components/images/edit.svg";
import Delete from "../../components/images/delete.svg";
import LoadingScreen from "../../utils/loading.js";
import "./productStyles.scss";
import AddSvg from "../../components/images/Add.svg";
import Pagination from "../../components/Pagination";
import Toast from "../../components/Toast";
export default class ProductComp extends React.Component {
  render() {
    const {
      userdata,
      currentPage,
      postPerPage,
      handleClick,
      loading,
      handleEdit,
      handleSubmit,
      handleChange,
      Adddata,
      handleAddButton,
      handleToast,
      editData,
      handleExit,
      id,
      title,
      price,
      stock,
      brand,
      category,
      handleUpdate,
      handleDelete,

    } = this.props;
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentposts = userdata.slice(firstPostIndex, lastPostIndex);
    const totalPosts = userdata.length;
    return (
      <div className="customerMain">
        <>{handleToast ? <Toast /> : ""}</>
        <div className="customerHead">
          <div>
            <img src={Product} alt="customer" />
            <h3>Customer Details</h3>
          </div>
          <div>
            <button
              className={Adddata ? "hidden" : "CustAddUserBtn"}
              onClick={handleAddButton}
            >
              <img className="CustAddicon" src={AddSvg} alt="add" />
              Add
            </button>
          </div>
        </div>
        <div className="customerTable">
          <div className={Adddata ? "Adduser" : "hidden"}>
            <form
              className="addUserForm"
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="addUserForm-Container">
                <p>Enter Product Details:</p>
                <div className="addUserForm-Details ">
                  <label>Title</label>
                  <input type="text" name="Title" onChange={handleChange} />
                </div>
                <div className="addUserForm-Details ">
                  <label>Price</label>
                  <input type="number" name="Price" onChange={handleChange} />
                </div>
                <div className="addUserForm-Details">
                  <label>Stock</label>
                  <input type="text" name="stock" onChange={handleChange} />
                </div>
                <div className="addUserForm-Details">
                  <label>Brand</label>
                  <input
                    type="text"
                    name="brand"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>
                <div className="addUserForm-Details">
                  <label>Category</label>
                  <input type="text" name="category" onChange={handleChange} />
                </div>
                <div className="addUserForm-Details">
                  <button className="formsave" type="submit">
                    Save
                  </button>
                  <button className="formexit" onClick={handleAddButton}>
                    Exit
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="custTabel">
            <div className="tableHead">
              <div className="tableHeadId">
                <p>Id</p>
              </div>
              <div className="tableHeadName">
                <p>Title</p>
              </div>
              <div className="tableHeadEmail">
                <p>Price</p>
              </div>
              <div className="tableHeadPassword">
                <p>Stock</p>
              </div>
              <div className="tableHeadNumber">
                <p>brand</p>
              </div>
              <div className="tableHeadNumber">
                <p>category</p>
              </div>
              <div className="tableHeadEdit">
                <p>Update</p>
              </div>
            </div>
            <hr />
            {loading === true ? (
              <LoadingScreen />
            ) : (
              <>
                {currentposts.map((item) => {
                  return (
                    <div className="ProductDetailTable" key={item.id}>
                      <div className="productId">
                        <p>{item.id}</p>
                      </div>
                      <div className="productdetailName">
                        <p>
                          {item.title} 
                        </p>
                      </div>
                      <div className="productdetailEmail">
                        <p>{item.price}</p>
                      </div>
                      <div className="productdetailPassword">
                        <p>{item.stock}</p>
                      </div>
                      <div className="productdetailNumber">
                        <p>{item.brand}</p>
                      </div>
                      <div className="productdetailNumber">
                        <p>{item.category}</p>
                      </div>
                      <div className="productdetailbutton">
                        <button
                          className="productButton productEditBtn"
                          value={item.id}
                          onClick={() => handleEdit(item.id)}
                        >
                          <img className="productEdit" src={Edit} alt="edit"></img>
                        </button>
                        <button
                          className="productButton productDeleteBtn"
                          value={item.id}
                          onClick={() =>{ 
                            handleDelete(item.id)
                          }}
                        >
                          <img
                            className="productDelete"
                            src={Delete}
                            alt="delete"
                          ></img>
                        </button>
                      </div>
                    </div>
                  );
                })}
                <Pagination
                  userdata={userdata}
                  currentPage={currentPage}
                  postPerPage={postPerPage}
                  handleClick={handleClick}
                  totalPosts={totalPosts}
                />
              </>
            )}
          </div>
        </div>

        <div className={editData ? "edituser Adduser" : "hidden"}>
          <form
            className="edituserForm"
            onSubmit={handleUpdate}
            autoComplete="off"
          >
            <div className="edituserForm-Container">
              <p>Update Product Details:</p>
              <div className="edituserForm-Details ">
                <label>Id</label>
                <input
                  type="text"
                  name="id"
                  onChange={handleChange}
                  value={id}
                  disabled
                />
              </div>
              <div className="edituserForm-Details ">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <div className="edituserForm-Details ">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  onChange={handleChange}
                  value={price}
                />
              </div>
              <div className="edituserForm-Details">
                <label>Stock</label>
                <input
                  type="text"
                  name="stock"
                  onChange={handleChange}
                  value={stock}
                />
              </div>
              <div className="edituserForm-Details">
                <label>brand</label>
                <input
                  type="text"
                  name="brand"
                  autoComplete="off"
                  onChange={handleChange}
                  value={brand}
                />
              </div>
              <div className="edituserForm-Details">
                <label>category</label>
                <input
                  type="text"
                  name="category"
                  onChange={handleChange}
                  value={category}
                />
              </div>
              <div className="edituserForm-Details">
                <button className="formsave" type="submit">
                  Save
                </button>
                <button className="formexit" onClick={handleExit}>
                  Exit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// For reference

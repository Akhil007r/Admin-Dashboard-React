import React from "react";
import customer from "../../components/images/rating.png";
import Edit from "../../components/images/edit.svg";
import Delete from "../../components/images/delete.svg";
import LoadingScreen from "../../utils/loading.js";
import "./customerStyles.scss";
import AddSvg from "../../components/images/Add.svg";
import Pagination from "../../components/Pagination";
import Toast from "../../components/Toast";
export default class CustomerComp extends React.Component {
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
      firstName,
      lastName,
      email,
      phone,
      password,
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
            <img src={customer} alt="customer" />
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
                <p>Enter User Details:</p>
                <div className="addUserForm-Details ">
                  <label>First Name</label>
                  <input type="text" name="firstName" onChange={handleChange} />
                </div>
                <div className="addUserForm-Details ">
                  <label>Last Name</label>
                  <input type="text" name="lastName" onChange={handleChange} />
                </div>
                <div className="addUserForm-Details">
                  <label>Email</label>
                  <input type="email" name="email" onChange={handleChange} />
                </div>
                <div className="addUserForm-Details">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>
                <div className="addUserForm-Details">
                  <label>Phone</label>
                  <input type="number" name="phone" onChange={handleChange} />
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
                <p>Name</p>
              </div>
              <div className="tableHeadEmail">
                <p>Email</p>
              </div>
              <div className="tableHeadPassword">
                <p>Password</p>
              </div>
              <div className="tableHeadNumber">
                <p>Number</p>
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
                    <div className="customerDetailTable" key={item.id}>
                      <div className="custdetailId">
                        <p>{item.id}</p>
                      </div>
                      <div className="custdetailName">
                        <p>
                          {item.firstName} {item.lastName}
                        </p>
                      </div>
                      <div className="custdetailEmail">
                        <p>{item.email}</p>
                      </div>
                      <div className="custdetailPassword">
                        <p>{item.password}</p>
                      </div>
                      <div className="custdetailNumber">
                        <p>{item.phone}</p>
                      </div>
                      <div className="custdetailbutton">
                        <button
                          className="custButton custEditBtn"
                          value={item.id}
                          onClick={() => handleEdit(item.id)}
                        >
                          <img className="custEdit" src={Edit} alt="edit"></img>
                        </button>
                        <button
                          className="custButton custDeleteBtn"
                          value={item.id}
                          onClick={() =>{ 
                            handleDelete(item.id)
                          }}
                        >
                          <img
                            className="custDelete"
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
            {/* <div className={showDelete ? "hidden":"deleteWarning"}>
              <div>
                <p>
                  Are you Sure ? <br />
                  <span>Once done changes can't be Made!!</span>
                </p>
                <div>
                  <button className="DeleteYes" onClick={deletee}>YES</button>
                  <button className="DeleteNO" >NO</button>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className={editData ? "edituser Adduser" : "hidden"}>
          <form
            className="edituserForm"
            onSubmit={handleUpdate}
            autoComplete="off"
          >
            <div className="edituserForm-Container">
              <p>Update User Details:</p>
              <div className="edituserForm-Details ">
                <label>Id</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={id}
                  disabled
                />
              </div>
              <div className="edituserForm-Details ">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="edituserForm-Details ">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={lastName}
                />
              </div>
              <div className="edituserForm-Details">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <div className="edituserForm-Details">
                <label>Password</label>
                <input
                  type="text"
                  name="password"
                  autoComplete="off"
                  onChange={handleChange}
                  value={password}
                />
              </div>
              <div className="edituserForm-Details">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  value={phone}
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

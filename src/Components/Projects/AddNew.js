import styles from './addNew.module.css';

const AddNew = () => {
  return (
    <section className={styles.container}>
      <h2>Add New Project</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required="required" placeholder="Give it a name"></input>
          <span>Must have less than 50 characters. Only text. Whitout spaces between words.</span>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            required="required"
            placeholder="Set a description"
          ></input>
          <span>Must have less than 130 characters.</span>
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" required="required" placeholder="MM/DD/YYYY"></input>
          <span>Must have MM/DD/YYYYY format. And be a valid Date.</span>
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" placeholder="MM/DD/YYYY"></input>
          <span>Must have MM/DD/YYYY format. And be a valid Date.</span>
        </div>
        <div>
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            name="clientName"
            required="required"
            placeholder="For what client?"
          ></input>
          <span>Must have less than 50 characters. Only text. Whitout spaces between words.</span>
        </div>
        <div>
          <label htmlFor="active">Active</label>
          <input type="checkbox" name="active"></input>
          <span>Set if the project is active or not.</span>
        </div>
        <div>
          <label htmlFor="employees">Employees</label>
          <input type="text" name="employees" placeholder="Assign employees with their IDs"></input>
          <span>Must be the ID of an existing employee. Separate IDs with a comma.</span>
        </div>
        <div>
          <label htmlFor="admins">Admins</label>
          <input
            type="text"
            name="admins"
            required="required"
            placeholder="Assign the admins"
          ></input>
          <span>Must have less than 50 characters. Only admin names.</span>
        </div>
        <div>
          <input type="submit" name="project-submit" value="ADD NEW PROJECT"></input>
        </div>
        <a href="/projects">Cancel</a>
      </form>
    </section>
  );
};

export default AddNew;

## Course data model
A course is a distributed series of items across the network. Because of this, it’s actually tapping into a replicated model of different system types. There’s the CIS representation of a course / section, an Authority representation of course / section, and a Service representation.
It’s different in each type of system due to the complexity of the data that needs modeled  but utilizes machine names and UUIDs in order to keep the data model in tact.

![Course data model across the network](https://cloud.githubusercontent.com/assets/329735/14988658/ef2316a2-1122-11e6-8a91-eb4815f46db9.jpg)

### Example of the data model utilized by the network
This visual shows how a course title being updated in one place would then be propagated across all other systems in the network.
![Updating a title across the network](https://cloud.githubusercontent.com/assets/329735/14988667/f6fc1be4-1122-11e6-90fc-04bd266dcc8d.jpg)

This is a similar process for how user accounts will be propagated across as the section connotation exists everywhere it’s needed.

### Implementing the data model in new systems
If an authority system, Courses as nodes called cis_course, will have the type managed primarily by the cis_course_authority module/feature. If you want to reference the course from other content in your system *and retain the course context* then you’ll want to name your entity reference `field_cis_course_ref`.

Doing so allows the function `_cis_connector_course_context()` to discover the content correctly and inform the rest of the system (via rewriting of addresses and other functions that call for context) that you are indeed still in the same course context.
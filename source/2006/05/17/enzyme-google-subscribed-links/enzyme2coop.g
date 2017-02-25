import groovy.xml.*
import org.expasy.enzymes.tools.*
import org.expasy.enzymes.models.*

reader = new EnzymeReader(System.in)

print """\
<Results>
<ResultSpec id="Enzyme">
	<Query>EC [EC]</Query>	
	<Response>
		<Output name="title">EC [0.title]</Output>
		<Output name="text1">[0.description]</Output>
		<Output name="more_url">http://expasy.org/enzyme/[0.id]</Output>
	</Response>
</ResultSpec>
"""

while (entry = reader.next()) {
	printit(entry)
}

println """
<Results>
"""

def printit(entry) {
	builder = new MarkupBuilder()
	builder.DataObject(id : entry.id, type : 'EC') {
		QueryName(value : entry.id)
		Attribute(name : 'id', value : entry.id)
		Attribute(name : 'title', value : entry.label)
		if (entry.hasActivities()) {
			Attribute(name : 'description', value : entry.activities[0])
		}
	}
	println ''
}

import {JsonSchemaViewer} from '@stoplight/json-schema-viewer';
import {Box, injectStyles, Provider as MosaicProvider} from '@stoplight/mosaic';
import {prototypeApplication} from 'schemas';

function App() {
  injectStyles();
  return (
    <MosaicProvider>
      <Box mx="auto" py={20} px={8} style={{maxWidth: 800}}>
        <JsonSchemaViewer
          name="Digital planning data schemas"
          schema={prototypeApplication}
          hideTopBar={false}
          emptyText="No schema defined"
          expanded={true}
          defaultExpandedDepth={0}
          renderRootTreeLines={true}
        />
      </Box>
    </MosaicProvider>
  );
}
export default App;

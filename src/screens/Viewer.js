import React from 'react';
import {DocumentView, RNPdftron, Config} from 'react-native-pdftron';

const Viewer = ({route}) => {
  const url = route.params?.url;

  React.useEffect(() => {
    RNPdftron.initialize('Insert commercial license key here after purchase');
    RNPdftron.enableJavaScript(true);
  }, []);

  return (
    <DocumentView
      document={url}
      hideToolbarsOnTap={false}
      hideTopAppNavBar={true}
      bottomToolbarEnabled={false}
      hideTopToolbars={true}
      layoutMode={Config.LayoutMode.Continuous}
      fitMode={Config.FitMode.FitWidth}
    />
  );
};

export default Viewer;

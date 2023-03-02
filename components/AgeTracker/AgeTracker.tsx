/* eslint-disable react/no-unused-prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import convert from 'xml-js';
import { Box, Grid, Text, TextInput } from '@mantine/core';
import { findEl, findElText } from '../Utils/Utils';

interface AgeTrackerProps extends convert.Element {
  children?: React.ReactNode,
}

const AgeTrackerComponent: React.FC<AgeTrackerProps> = (props) => {
  const [ageBiologicalTicksElement, setAgeBiologicalTicksElement] = useState<convert.Element>(findEl(props, 'ageBiologicalTicks') as convert.Element);
  const [birthAbsTicksElement, setBirthAbsTicksElement] = useState<convert.Element>(findEl(props, 'birthAbsTicks') as convert.Element);
  const [growthElement, setGrowthElement] = useState<convert.Element>(findEl(props, 'growth') as convert.Element);
  const [nextGrowthCheckTickElement, setNextGrowthCheckTickElement] = useState<convert.Element>(findEl(props, 'nextGrowthCheckTick') as convert.Element);
  const [ageReversalDemandedAtAgeTicksElement, setAgeReversalDemandedAtAgeTicksElement] = useState<convert.Element>(findEl(props, 'ageReversalDemandedAtAgeTicks') as convert.Element);
  const [initializedAgeReversalDemandElement, setInitializedAgeReversalDemandElement] = useState<convert.Element>(findEl(props, 'initializedAgeReversalDemand') as convert.Element);

  return (
    <Box sx={{
      bg: 'gray.100',
    }}
    />
  );
};

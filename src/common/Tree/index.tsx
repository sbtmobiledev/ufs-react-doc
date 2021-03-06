import * as React from 'react';
import { ComponentType } from '../types';

import createTree from './createTree';
import Leaf from './Leaf';

interface Props {
    list: ComponentType[];
    index: number;
}

export default function Tree(props: Props) {
    const { list, index } = props;
    const step = -1;

    if (!list || list.length === 0) {
        return null;
    }

    const tree = createTree(list);

    return (
        <Leaf {...{ index, tree, step }} />
    );
}

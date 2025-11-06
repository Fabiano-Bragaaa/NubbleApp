import {Box} from '../Box/Box';
import {Separator} from '../Separator/Separator';

import {RadioButtonItem, RadioButtonItemProps} from './RadioButtonItem';

type itemTConstraints = Record<string, any>;

export type RadioButtonSelectorProps<ItemT extends itemTConstraints> = {
  items: ItemT[];
  selectedItem?: ItemT;
  onSelect: (item: ItemT) => void;
  labelKey: keyof ItemT;
  descriptionKey?: keyof ItemT;
  valueKey: keyof ItemT;
};

export function RadioButtonSelector<ItemT extends itemTConstraints>({
  items,
  selectedItem,
  onSelect,
  labelKey,
  descriptionKey,
  valueKey,
}: RadioButtonSelectorProps<ItemT>) {
  return (
    <Box>
      {items.map((item, index) => (
        <Box key={item[labelKey]}>
          <RadioButtonItem
            label={item[labelKey]}
            isSelected={
              !!selectedItem && selectedItem[valueKey] === item[valueKey]
            }
            onPress={() => onSelect(item)}
            description={descriptionKey ? item[descriptionKey] : undefined}
          />
          {index < items.length - 1 && <Separator />}
        </Box>
      ))}
    </Box>
  );
}

import {Component} from '@tarojs/taro';
import {Block, Text, View} from '@tarojs/components';
import MIcon from '../MIcon';
import './index.scss';

class MLoading extends Component {
  static externalClasses = ['m-class'];
  state = {
    show: false,
    text: ''
  };
  handleShow = ({text = '正在加载'}) => {
    this.setState({show: true, text});
  };
  handleHide = () => {
    this.setState({show: false});
  };

  render() {
    const {show, text} = this.state;
    return (
      show ?
        <Block>
          <View className='mask'/>
          <View className='loading m-class'>
            <View className='spin'><MIcon type='loading' size={64}/></View>
            <Text className='text'>{text}</Text>
          </View>
        </Block> : null
    );
  }
}

export default MLoading;
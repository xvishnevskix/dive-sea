import { Modal, Switch } from 'antd';
import React, { useState } from 'react';
import Form from '../../ui/form/Form';
import Button from '../../ui/button/Button';
import { UploadOutlined } from '@ant-design/icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './Sell.module.scss';
import './Sell.css'

export interface IData{
    key: any;
    entries: any;
    map: any;
    photo?: string,
    name: string,
    description: string,
    royalty: string,
    size: string,
    price: string,
    tags: string,
    inStock: string,
    sw1?: boolean,
    sw2?: boolean,
}
const Sell: React.FC = () => {

    const {register, reset, formState: {errors}, handleSubmit} = useForm<IData>({mode: 'onChange'});

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); 

    const [fullData, setFullData] = useState<IData>();

    const [photo, setPhoto] = useState<string|undefined>('');
    const [sw1, setSW1] = useState<boolean>(true);
    const [sw2, setSW2] = useState<boolean>(false);

    const onSubmit:SubmitHandler<IData> = data =>{
        setFullData({photo, ...data, sw1, sw2});
        setIsModalOpen(pre=>!pre)
        setSW1(true);
        setSW2(false);
        setPhoto('')
        reset();
    }


    const foo = (obj: IData)=>{
        return Object.keys(obj).map(key => ({ key, value: obj[key as keyof IData] }));
    }

  return (
    <>
        <article className={styles.container}>
            <h2 className={styles.header}>Create Your NFT</h2>
            <div className={styles.mainContainer}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.inputContainer}>
                    <Form register={register} error={errors} name={'name'} header='Name' placeholder='ArtWork Name' />
                    <Form register={register} error={errors} name={'description'} isTextarea={true} header='Description' placeholder='Enter Your Description' />
                    <div className={styles.metrics}>
                        <div className={styles.royalty}>
                            <Form register={register} error={errors} name={'royalty'} header='Royalty' placeholder='Royalty' />
                        </div>
                        <div>
                            <Form register={register} error={errors} name={'size'} header='Size' placeholder='Ex - 100 x 100' />
                        </div>
                    </div>
                    <Form register={register} error={errors} name={'tags'} header='Tags' placeholder='Beautiful Castle, Monkeys ETC' />
                    <div className={styles.miniForm}>
                        <div className={styles.singleForm}>
                            <Form register={register} error={errors} name={'price'} header='Price' placeholder='0.00007 ETC' />
                        </div>
                        <div>
                            <Form register={register} error={errors} name={'inStock'} header='In Stock' placeholder='001' />
                        </div>
                    </div>
                    <div className={styles.switchPart}>
                        <p>Put On Sale<span>People Will Bids On Your NFT Project</span></p>
                        <Switch onChange={(e)=>setSW1(e)} defaultChecked={sw1} />
                    </div>
                    <div className={styles.switchPart}>
                        <p>Direct Sale<span>No Bids - Only Direct Salling</span></p>
                        <Switch onChange={(e)=>setSW2(e)} defaultChecked={sw2} />
                    </div>
                    <Button theme='black' name={<p className={styles.par}>Create</p>} className={styles.btn} />
                </form>
                <div className={styles.choosePhoto}>
                    {
                        photo
                            ? <img src={photo} alt='select photo' className={styles.selectPhoto} />
                                : <div className={styles.uploadPhoto}>
                                    <UploadOutlined style={{fontSize: '20pt'}} />
                                    <p>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
                                </div>
                    }
                    <Button theme='black' name={<><p className={styles.btnUploud}>Upload</p><input type={'file'} accept="image/jpeg, image/png, image/jpg" onChange={(e:any)=>setPhoto(URL.createObjectURL(e.target.files[0]))} className={styles.fileInput}/></>} className={styles.btn}/>
                </div>
            </div>
        </article>  
        <Modal title={'Your Data'} open={isModalOpen} cancelButtonProps={{style: {display: "none"}}} closable={false} onOk={()=>setIsModalOpen(pre=>!pre)}>
            {
                fullData
                &&
                foo(fullData!).map((el)=>(
                   <p key={el.key}>{`${el.key}: ${el.value}`}</p>
                ))
            }
        </Modal>
    </>
  )
}

export default Sell;
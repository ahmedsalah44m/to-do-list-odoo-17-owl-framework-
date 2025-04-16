/* @odoo-module */
import { registry } from '@web/core/registry';

const {Component,useState,onWillStart,useRef} =owl;

import {useService} from '@web/core/utils/hooks'

export class ToDoList extends Component{
    setup(){
        this.state = useState({
            taskList:[],
            task:{name:'',color:'#FFFFFF',completed:false},
            isEdit:false,
            activeId:false,
        })
        this.orm = useService('orm')
        this.model = 'owl.dev.todo.list'
        this.searchValue = useRef('search-value')


        onWillStart(async ()=>{
              await this.getAllTasks()
        })

    }

    async getAllTasks(){
            this.state.taskList = await this.orm.searchRead(this.model,[],["name","color","completed"])
    }


    addTask(){
        this.clearTask()
        this.state.isEdit = false
        this.state.activeId =false

  }

  editTask(task){
    this.state.isEdit = true
    this.state.task = {...task}
    this.state.activeId = task.id

  }
  async saveTask(){
        console.log(this.state.task)

        if(this.state.isEdit){
            await this.orm.write(this.model,[this.state.activeId],this.state.task)
        }else{
            await  this.orm.create(this.model,[{
            name:this.state.task.name,
            color:this.state.task.color,
            completed:this.state.task.completed,
            }]);
        }

        this.clearTask()
        await this.getAllTasks();
  }


   clearTask(){
       this.state.task =  {name:'',color:'#FFFFFF',completed:false}
   }

   async deleteTask(task){
        await this.orm.unlink(this.model,[task.id])
        await this.getAllTasks()
        this.clearTask()
   }

   async searchTask(){


    const tasks = this.searchValue.el.value
        this.state.taskList = await this.orm.searchRead(this.model,[
        ['name','ilike',tasks]
        ])
   }

    async treeChangeChecked(e,task){
        await this.orm.write(this.model,[task.id] ,{completed:e.target.checked})
        await this.getAllTasks()
    }

    async treeChangeColor(e,task){
        await this.orm.write(this.model,[task.id],{color:e.target.value})
        await this.getAllTasks()
    }

}


ToDoList.template = 'owl_dev.owl_template_view';
registry.category('actions').add('owl_dev.action_todo_list_js',ToDoList);